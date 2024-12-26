import { Card } from "flowbite-react"
import myphoto from "/images/myphoto.jpg"

const Profile = () => {
    return (
        <Card className="max-w-full m-5">
            <div className="flex justify-between px-5 pt-5 flex-wrap">
                <div className="flex flex-col items-center pb-10 px-10">
                    <img
                        alt="Profile Image"
                        height="150"
                        src={myphoto}
                        width="150"
                        className="mb-3 rounded-full shadow-lg"
                    />
                    <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Putri Athira Zahra</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</span>
                </div>
                <div className="coloumn py-16 sm:text-center md:text-left">
                    <h4 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Phone +62 877-3684-5082</h4>
                    <h5>Email: putriathiraaww@gmail.com</h5>
                    <h5>Github: github.com/athirputri</h5>
                    <h5>Linkedin: linkedin.com/in/Putri Athira Zahra</h5>
                </div>
            </div>
        </Card>
    )
}

export default Profile
