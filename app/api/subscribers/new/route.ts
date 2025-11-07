import { ConnectDB } from "@/utils/database";
import subscribers from "@/models/subscriber";

export const POST = async (req: Request) => {
    const { name, email } = await  req.json()

    try {
        await  ConnectDB();
        const newSubscriber = new subscribers({
            name,
            email,
        })
        
        await  newSubscriber.save();

        return new Response(JSON.stringify(newSubscriber), {
            status: 200
        })
    } catch (error) {
        console.log(error)
        return new Response("Failed to create a new subscriber", {
            status: 500
        });
    }
}