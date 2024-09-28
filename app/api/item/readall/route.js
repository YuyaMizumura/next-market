
import { connectDB, ItemModel, NextResponse } from "../../../utils/modules";


export async function GET() {
    
    try {

        await connectDB();
        const allItems = await ItemModel.find(); // データの取得
        
        return NextResponse.json(
            {
                message: 'アイテム読み取り成功(オール)',
                allItem: allItems
            }
        );

    } catch (e) {
        return NextResponse.json(
            {
                message: 'アイテム読み取り失敗(オール)'
            }
        );
    }

}