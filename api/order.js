export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    try {
        const { playerId, playerName, product, price } = req.body;

        if (!playerId || !product) {
            return res.status(400).json({ success: false, message: 'بيانات غير مكتملة' });
        }

        // هنا يتم معالجة الطلب وإرجاع الرد
        return res.status(200).json({
            success: true,
            message: 'تم استقبال الطلب بنجاح في الـ API!',
            orderData: {
                id: playerId,
                name: playerName || 'غير محدد',
                item: product,
                cost: price,
                createdAt: new Date().toISOString()
            }
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'حدث خطأ في السيرفر' });
    }
}
