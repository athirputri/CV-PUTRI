import { Card } from "flowbite-react"
import myphoto from "/images/myphoto.jpg"

const Profile = () => {
    return (
        <Card className="max-w-full m-5">
            <div className="flex justify-left px-5 pt-5 flex-wrap gap-x-10">
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
                <div className="coloumn py-8 sm:text-center md:text-left">
                    <h4 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Contact</h4>
                    <h5>Phone: +62 877-3684-5082</h5>
                    <h5>Email: <u><a href="https://mail.google.com/mail/?view=cm&fs=1&to=putriathiraaww@gmail.com">putriathiraaww@gmail.com</a></u></h5>
                    <h5>Github: <u><a href="https://github.com/athirputri">athirputri</a></u></h5>
                    <h5>Linkedin: <u><a href="https://www.linkedin.com/in/putri-athira-zahra-15835a32b/">Putri Athira Zahra</a></u></h5>
                </div>
            </div>
        </Card>
    )
}

export default Profile
