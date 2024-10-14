
import { connectDB, NextResponse } from "../../../utils/modules";
import { UserModel } from "../../../utils/schemaModels";

export async function POST(req) {
    
    const reqBody = await req.json();

    try
    {
        await connectDB();
        const savedUserData = await UserModel.findOne({email: reqBody.email});

        if(savedUserData) {

            if(reqBody.password === savedUserData.password)
            {
                return NextResponse.json({ message: "ログインに成功しました。" });
            }
            else
            {
                return NextResponse.json({ message: "ログイン失敗：パスワードが間違っています。" });
            }

        }
        else
        {
            return NextResponse.json({ message: "ログイン失敗：ユーザー登録をしてください。" });
        }

    } 
    catch(err)
    {
       return NextResponse.json({ message: "ログイン失敗" });
    }

}