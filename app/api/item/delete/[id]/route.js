
import { connectDB, ItemModel, NextResponse } from "../../../../utils/modules";


export async function DELETE(req, context) {
    
    const idData = context.params.id;

    try {

        await connectDB();
        await ItemModel.deleteOne({_id: idData}); // データ取得

        return NextResponse.json(
            {
                message: 'アイテム読み削除成功'
            }
        );

    } catch (e) {
        return NextResponse.json(
            {
                message: 'アイテム削除失敗'
            }
        );
    }

}