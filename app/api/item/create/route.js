
import { connectDB, NextResponse } from "../../../utils/modules";
import { ItemModel } from "../../../utils/schemaModels.js"


export async function POST(req) {

    const reqBody = await req.json();

    try 
    {
        await connectDB();
        await ItemModel.create(reqBody);

        return NextResponse.json(
            {
                message: 'アイテム作成成功'
            }
        );

    }
    catch(e)
    {
        return NextResponse.json(
            {
                message: 'アイテム作成失敗'
            }
        );
    }
}