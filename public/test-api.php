<?php
$apiKey = 'AIzaSyDPPZvZ5zE2SyY90Jpcdv-bjbHFEVpr-mw';
$url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=$apiKey";

$data = [
    "contents" => [
        ["parts" => [["text" => "مرحبا"]]]
    ]
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

echo "<div style='font-family: Arial; direction: rtl; padding: 20px;'>";
echo "<h1>اختبار الاتصال المباشر بخوادم جوجل 🌐</h1>";
echo "<p>هذه الصفحة تقوم بالاتصال المباشر بخوادم جوجل باستخدام المفتاح الجديد الخاص بك <b>بدون المرور بأي كود خاص بالمشروع</b>، لنرى ماذا ترد علينا خوادم جوجل بالضبط:</p>";
echo "<hr>";
echo "<h2>حالة الرد من جوجل (HTTP Status): <span style='color: red;'>$httpcode</span></h2>";
echo "<h3>نص الخطأ الصريح القادم من سيرفرات جوجل (Raw Response):</h3>";
echo "<pre dir='ltr' style='background: #f4f4f4; padding: 15px; border-radius: 8px; border: 1px solid #ddd;'>" . htmlspecialchars(json_encode(json_decode($response), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE)) . "</pre>";

echo "<h3 style='color: #d9534f;'>تحليل الخطأ:</h3>";
if ($httpcode == 429) {
    echo "<p>الخطأ 429 يعني (Quota Exceeded)، وتجد في النص كلمة limit: 0. هذا يؤكد أن جوجل ترفض إعطاء هذا الحساب أي طلبات مجانية.</p>";
} elseif ($httpcode == 403) {
    echo "<p>الخطأ 403 (Permission Denied). حسابك محظور من استخدام واجهة برمجة التطبيقات.</p>";
} else {
    echo "<p>يرجى قراءة الخطأ باللغة الإنجليزية في الصندوق أعلاه لفهم سبب الرفض من جوجل.</p>";
}
echo "</div>";
