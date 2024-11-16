
import { connectDB, ItemModel, NextResponse } from "../../../../utils/modules";


export async function DELETE(req, context) {
    
    const idData = context.params.id;

    try {

        await connectDB();

        const singleItem = await ItemModel.findByIe(idData);

        if(singleItem.email === reqBody.email)
        {
            await ItemModel.deleteOne({_id: idData}); // データ削除
            return NextResponse.json({ message: 'アイテム削除成功' });
        }
        else
        {
            return NextResponse.json({ message: '他の人が作成したアイテムです' });
        }

    } catch (e) {
        return NextResponse.json(
            {
                message: 'アイテム削除失敗'
            }
        );
    }

}