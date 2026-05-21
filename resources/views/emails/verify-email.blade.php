<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تأكيد البريد الإلكتروني</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap');
        
        body {
            font-family: 'Cairo', system-ui, -apple-system, sans-serif;
            background-color: #f4f4f5;
            margin: 0;
            padding: 0;
            width: 100% !important;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            direction: rtl;
            text-align: right;
        }

        table {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }

        .wrapper {
            width: 100%;
            table-layout: fixed;
            background-color: #f4f4f5;
            padding: 40px 0;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
            border: 1px solid #e4e4e7;
        }

        .header-bar {
            height: 6px;
            background: linear-gradient(90deg, #6366f1 0%, #a855f7 100%);
        }

        .content {
            padding: 40px 32px;
        }

        .logo-section {
            margin-bottom: 30px;
            text-align: center;
        }

        .app-name {
            font-size: 20px;
            font-weight: 800;
            color: #09090b;
            text-decoration: none;
            letter-spacing: -0.5px;
        }

        .title {
            font-size: 22px;
            font-weight: 700;
            color: #09090b;
            margin-top: 0;
            margin-bottom: 16px;
            line-height: 1.4;
        }

        .greeting {
            font-size: 16px;
            font-weight: 600;
            color: #27272a;
            margin-bottom: 12px;
        }

        .text {
            font-size: 14px;
            color: #71717a;
            line-height: 1.8;
            margin-bottom: 24px;
        }

        .button-container {
            text-align: center;
            margin: 35px 0;
        }

        .btn {
            display: inline-block;
            background-color: #09090b;
            color: #ffffff !important;
            font-size: 14px;
            font-weight: 700;
            text-decoration: none;
            padding: 12px 32px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: background-color 0.2s ease;
        }

        .btn:hover {
            background-color: #27272a;
        }

        .divider {
            border-top: 1px solid #e4e4e7;
            margin: 30px 0;
        }

        .footer {
            font-size: 12px;
            color: #a1a1aa;
            line-height: 1.6;
            text-align: center;
        }

        .trouble-link {
            word-break: break-all;
            color: #6366f1;
            font-size: 12px;
            text-decoration: none;
        }

        .trouble-link:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <table class="container" width="100%" cellpadding="0" cellspacing="0">
            <tr>
                <td>
                    <div class="header-bar"></div>
                    <div class="content">
                        <!-- Logo / Brand -->
                        <div class="logo-section">
                            <span class="app-name">📚 غرفة المذاكرة التفاعلية</span>
                        </div>
                        
                        <!-- Greeting -->
                        <div class="greeting">مرحباً، {{ $name }} 👋</div>
                        
                        <!-- Main Title -->
                        <h1 class="title">تأكيد حسابك الإلكتروني</h1>
                        
                        <!-- Content Text -->
                        <p class="text">
                            يسعدنا انضمامك إلينا! لتفعيل حسابك والبدء في استكشاف الكورسات والمذاكرة التفاعلية، يرجى تأكيد ملكية بريدك الإلكتروني بالضغط على الزر أدناه:
                        </p>
                        
                        <!-- Action Button -->
                        <div class="button-container">
                            <a href="{{ $url }}" class="btn" target="_blank">تأكيد البريد الإلكتروني</a>
                        </div>
                        
                        <p class="text" style="font-size: 12px; color: #a1a1aa;">
                            * هذا الرابط صالح لمدة 60 دقيقة فقط من وقت إرساله. إذا لم تقم بإنشاء حساب، يمكنك تجاهل هذا البريد الإلكتروني بأمان.
                        </p>
                        
                        <div class="divider"></div>
                        
                        <!-- Technical fallback -->
                        <p class="text" style="font-size: 11px; margin-bottom: 0;">
                            إذا واجهت مشكلة في الضغط على الزر، قم بنسخ الرابط أدناه ولصقه في متصفحك:
                            <br>
                            <a href="{{ $url }}" class="trouble-link" target="_blank">{{ $url }}</a>
                        </p>
                        
                        <!-- Footer -->
                        <div class="footer" style="margin-top: 40px;">
                            <p style="margin: 0;">&copy; {{ date('Y') }} غرفة المذاكرة التفاعلية. جميع الحقوق محفوظة.</p>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>
