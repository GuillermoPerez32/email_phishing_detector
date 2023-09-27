import datetime
import json
import eml_parser


def json_serial(obj):
    if isinstance(obj, datetime.datetime):
        serial = obj.isoformat()
        return serial


def get_eml(file_path):
    with open(file_path, 'rb') as fhdl:
        raw_email = fhdl.read()

        ep = eml_parser.EmlParser()
        parsed_eml = ep.decode_email_bytes(raw_email)
        return parsed_eml


def get_features(file_path) -> dict:
    # TODO: Complete extraction
    features = {}
    file_path = file_path
    parsed_eml = get_eml(file_path)

# ---------------------->EXTRACTION OF FEATURES<-----------------------------
    header = parsed_eml['header']
    body = parsed_eml['body']

    subject = header['subject']
    email_from = header['from']

    features['subject'] = subject
    features['from'] = email_from

# ---------------------->END EXTRACTIONS<-----------------------------
    return features
