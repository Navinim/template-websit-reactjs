import { ArrowRightAltOutlined } from "@mui/icons-material";
import { Button, Card} from "@mui/material";

const Offers = () => {
    return (
        <Card className="container bg-[url('https://cdn.pixabay.com/photo/2018/03/10/09/45/businessman-3213659_960_720.jpg')]">
            <div className="mt-20 mb-20 ml-10">
                <h3 className="mb-2 text-2xl uppercase text-blue-600">
                    Limited time offer
                </h3>
                <div className="mt-2 mr-2  grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
                    <h2 className=" mb-2 text-3xl text-white font-bold border-l-4 border-l-blue-600">
                        Get the best deal in the <br /> market
                    </h2>
                    <div>
                    <Button variant="contained" size='large' endIcon={<ArrowRightAltOutlined/>} className=" text-white font-bold">Get Started</Button>
                   </div>
                </div>
            </div>
        </Card>
    );
}
export default Offers