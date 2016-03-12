import logging
import os
import inflect

from flask import Flask, request, jsonify

plural = inflect.engine()
app = Flask(__name__)


@app.route("/", methods=['POST'])
def handle_hi():
    thread = request.json['mention']['thread']
    names = [p['user']['name'] for p in thread['participants']]

    response = u"Hello {}. Cool thread name: \"{}\"".format(
        plural.join(names), thread['topic'])

    return jsonify(text=response)


if __name__ == "__main__":
    app.config['SECRET_KEY'] = os.environ.get('FLASK_SECRET_KEY', '*')
    app.run(
        debug=True, 
        host='0.0.0.0',
        port=int(os.environ.get('PORT')) if 'PORT' in os.environ else None)
