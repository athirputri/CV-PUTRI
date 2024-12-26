import { Card } from "flowbite-react"

const Aboutme = () => {
  return (
    <Card className="max-w-full m-5">
        <div className="flex justify-between px-4 pt-4 flex-wrap">
            <div className="flex justify-center text-justify px-4 pt-4 flex-col items-center pb-10 px-10">
                <h3 className="mb-1 text-xl font-medium items-center text-gray-900 dark:text-white">About Me</h3>
                <span className="flex justify text-sm text-gray-500 dark:text-gray-400">As a student</span>
                <br />
                    <h5>Seorang siswa yang tengah menjalani pendidikan di <a href="https://www.smk-pi.sch.id/"><u>SMK PRAKARYA INTERNASIONAL</u></a> kelas 2 jurusan Pengembangan Perangkat Lunak dan Game dan sebagai programmer junior yang berdedikasi dan memiliki keahlian dalam pengembangan web dengan pengalaman menggunakan berbagai teknologi dan framework modern. Menguasai HTML, CSS, JavaScript, React.js, Laravel, PHP, Bootstrap, Tailwind, dan TypeScript. Memahami pengelolaan basis data dengan MySQL, PHPMyAdmin, serta pengaturan lingkungan pengembangan menggunakan Laragon. Berpengalaman dalam merancang sistem menggunakan UML untuk mendukung proses pengembangan perangkat lunak. Siap berkontribusi dalam tim dengan semangat belajar tinggi dan komitmen untuk menghasilkan solusi yang inovatif dan berkualitas.</h5>
            </div>
        </div>
    </Card>
  )
}

export default Aboutme