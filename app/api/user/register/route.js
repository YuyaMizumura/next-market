
import { connectDB, NextResponse } from "../../../utils/modules";
import { UserModel } from "../../../utils/schemaModels";

export async function POST(req) {
    
    const reqBody = await req.json();

    console.log(reqBody);

    try
    {
        await connectDB();
        await UserModel.create(reqBody);

        return NextResponse.json({ message: "ユーザー登録成功" });
    } 
    catch(err)
    {
       return NextResponse.json({ message: "ユーザー登録失敗" });
    }

}