from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

app = Flask(__name__)
CORS(app)

# Database initialization
def init_db():
    conn = sqlite3.connect('subscribers.db')
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS subscribers
        (email TEXT PRIMARY KEY, confirmed INTEGER DEFAULT 0)
    ''')
    conn.commit()
    conn.close()

# Email configuration
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SMTP_USERNAME = "newsletter.hiphoppulse@gmail.com"
SMTP_PASSWORD = "twdf wjgr zrdr doxy"  # App Password

def send_confirmation_email(email):
    try:
        msg = MIMEMultipart()
        msg['From'] = SMTP_USERNAME
        msg['To'] = email
        msg['Subject'] = "Welcome to Hip-Hop Pulse Newsletter!"

        body = """
        Thank you for subscribing to Hip-Hop Pulse Newsletter!
        
        Stay tuned for the latest updates in hip-hop culture, music, and events.
        
        Best regards,
        Hip-Hop Pulse Team
        """
        msg.attach(MIMEText(body, 'plain'))

        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SMTP_USERNAME, SMTP_PASSWORD)
        server.send_message(msg)
        server.quit()
        return True
    except Exception as e:
        print(f"Error sending email: {e}")
        return False

@app.route('/api/subscribe', methods=['POST'])
def subscribe():
    data = request.get_json()
    email = data.get('email')
    
    if not email:
        return jsonify({'error': 'Email is required'}), 400

    try:
        conn = sqlite3.connect('subscribers.db')
        c = conn.cursor()
        
        # Check if email already exists
        c.execute('SELECT * FROM subscribers WHERE email = ?', (email,))
        if c.fetchone():
            return jsonify({'error': 'Email already subscribed'}), 400

        # Add new subscriber
        c.execute('INSERT INTO subscribers (email) VALUES (?)', (email,))
        conn.commit()
        
        # Send confirmation email
        if send_confirmation_email(email):
            return jsonify({'message': 'Subscription successful! Please check your email.'}), 200
        else:
            return jsonify({'error': 'Failed to send confirmation email'}), 500

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        conn.close()

if __name__ == '__main__':
    init_db()
    app.run(host='0.0.0.0', port=5000)
