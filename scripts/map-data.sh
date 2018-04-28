#!/bin/bash

# helper tool to ingest map data files

# requires:
# a download of the map data from http://smarterroads.org/dataset/detail/26 , named "map-data.json"
# install of freely available https://github.com/eerimoq/asn1tools
# a copy of the official j2735 asn file, which you must purchase from sae
ASN=$HOME/j2735.asn

set -e
#set -x

mkdir -p map-data

while read -u 3 -r item && read -u 4 -r b64; do
	echo "$b64" | ./base64-to-hex  > map-data/$item.hex
done 3< <(jq -r '.[].id' map-data.json) 4< <(jq -r '.[].msg' map-data.json)

# bail out, since the real asn1 work isn't working. :/
exit 0

(cd map-data; ls *.uper) | while read file
do
	# this is the magic file one has
	# alas it still doesn't work?
	asn1tools convert -i uper -o jer "$ASN" MapData "$(cat map-data/$file)" > map-data/${file%.hex}.json

	# going back to manually running these hex files for now
done
