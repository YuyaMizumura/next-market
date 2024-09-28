
import { connectDB, ItemModel, NextResponse } from "../../../../utils/modules";


export async function PUT(req, context) {
    
    const reqBody = await req.json();
    const idData = context.params.id;

    try {

        await connectDB();
        await ItemModel.updateOne({_id: idData}, reqBody); // データ取得

        return NextResponse.json(
            {
                message: 'アイテム更新成功'
            }
        );

    } catch (e) {
        return NextResponse.json(
            {
                message: 'アイテム更新失敗'
            }
        );
    }

}