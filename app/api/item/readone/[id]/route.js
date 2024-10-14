
import { connectDB, NextResponse } from "../../../utils/modules";
import { ItemModel } from "../../../utils/schemaModels.js"



export async function GET(req, context) {
    
    console.log(context.params.id);

    try {

        await connectDB();
        const oneItem = await ItemModel.findById(context.params.id); // データ取得

        return NextResponse.json(
            {
                message: 'アイテム読み取り成功(シングル)',
                oneItem: oneItem
            }
        );

    } catch (e) {
        return NextResponse.json(
            {
                message: 'アイテム読み取り失敗(シングル)'
            }
        );
    }

}