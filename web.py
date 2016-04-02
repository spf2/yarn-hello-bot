import logging
import os
import inflect

from flask import Flask, request, jsonify

plural = inflect.engine()
app = Flask(__name__)


@app.route("/", methods=['POST'])
def handle_hi():
    response = None
    if 'mention' in request.json:
        thread = request.json['mention']['thread']
        names = [p['user']['name'] for p in thread['participants']]
        response = u"Hello {}. Cool thread name: \"{}\"".format(
            plural.join(names), thread['topic'])
    elif 'delivery' in request.json and 'event' in request.json['delivery']:
        thread = request.json['delivery']['thread']
        event = request.json['delivery']['event']
        if event['type'] == 'ADDED':
            names = [u['name'] for u in event['users'] if u['ident'].startswith('user:')]
            if names:
                response = u"Let me welcome you to this thread, {}".format(plural.join(names))

    if not response:
	return ""

    return jsonify(message={'text': response}, all_recipients=True)


if __name__ == "__main__":
    app.config['SECRET_KEY'] = os.environ.get('FLASK_SECRET_KEY', '*')
    app.run(
        debug=True, 
        host='0.0.0.0',
        port=int(os.environ.get('PORT')) if 'PORT' in os.environ else None)
