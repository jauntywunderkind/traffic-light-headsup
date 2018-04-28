import requests
import json

file_stream = open('key_and_road_list.txt', 'r')
keys = [x.split(":")[0] for x in file_stream.readlines()]

token = "type_your_auth_token_here"
raw_url = "http://www.smarterroads.org/dataset/download/19?token={token}&api=true&ctlr={key}"

def system_configuration_web_request_generator(keys):
    for key in keys:
        url = raw_url.format(token  = token,
                             key    = key)
        response = requests.get(url)
        if response.content != b'':
            yield response.json()

'''
Usage Example:

for json_dictionary in system_configuration_web_request_generator(keys):
    	... do something with the json_dictionary

'''
