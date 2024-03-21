import functions_framework
from flask import jsonify

@functions_framework.http
def get_average_http(request):
    request_args = request.args

    items = [
        request_args.get('item_1'),
        request_args.get('item_2'),
        request_args.get('item_3'),
        request_args.get('item_4')
    ]
    attendances = [
        request_args.get('attendance_1'),
        request_args.get('attendance_2'),
        request_args.get('attendance_3'),
        request_args.get('attendance_4')
    ]

    average_hours = calculate_average(attendances)

    output = {
        "error": False,
        "items": items,
        "average": average_hours
    }

    return jsonify(output)

def calculate_average(attendances):
    attendances = [int(a) if a and a.isdigit() else 0 for a in attendances]
    average_attendance = sum(attendances) / len(attendances) if attendances else 0
    return average_attendance