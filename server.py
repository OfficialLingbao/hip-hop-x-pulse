from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

def run(server_class=HTTPServer, handler_class=SimpleHTTPRequestHandler):
    # Using localhost
    server_address = ('localhost', 8000)
    httpd = server_class(server_address, handler_class)
    print(f"\nServer running at:")
    print(f"- Local: http://localhost:8000/")
    httpd.serve_forever()

if __name__ == '__main__':
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    run()