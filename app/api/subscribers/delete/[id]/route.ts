import { ConnectDB} from "@/utils/database";
import Subscribers from "@/models/subscriber";

export const DELETE = async (req: Request, { params }: { params: { id: string }}):
    Promise<Response> => {

    try {
        await ConnectDB();

        const deletedSubscriber = await Subscribers.findByIdAndDelete({ _id: params.id });

        if(!deletedSubscriber) {
            return new Response(JSON.stringify({
                message: 'Subscriber not found'
            }), {
                status: 404,
                headers: { 'Content-Type': 'application/json'}
            });
        }
        return new Response(JSON.stringify({
            message: "Subscriber deleted successfully"
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json'}
        })

    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({
            message: "Internal Server Error"
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json'}
        })
    }

}