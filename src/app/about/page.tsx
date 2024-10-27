import { rejects } from "assert"
import { resolve } from "path"

export default async function About() {
    await new Promise((resolve) => {
        setTimeout(resolve, 5000)
    })
    return (
        <div>

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">MUHAMMAD TAHIR
                            <br className="hidden lg:inline-block" />Fullstack Developer | Interior Desighner
                        </h1>
                        <p className="mb-8 leading-relaxed">I am a software developer proficient in both frontend and backend development. This means they can work on all layers of a web application, from designing user interfaces to managing databases and server infrastructure. Here’s an organized breakdown of a Full Stack Developer’s responsibilities, skills, and workflow:</p>
                        <p>I am a professional Interior Desighner, designs, and coordinates the aesthetics and functionality of interior spaces. They create visually appealing and practical environments by selecting furniture, colors, lighting, and materials, ensuring each space meets both client needs and building codes. Interior designers often work on residential, commercial, and public spaces, balancing style with functionality, safety, and accessibility.</p>
                        
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.18169-9/15895395_1351158571624568_670622728206611049_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEZqengZQRiyT40hUfZ5QMrhDWXyFQJF1WENZfIVAkXVa-XnEu2v4CVDkCYk1HRINlapbWg_nHyLev2zYWzPEHe&_nc_ohc=lJwzT9tYBQwQ7kNvgHAZBW-&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&oh=00_AYBTbvvg9tP93yjADDSKZwPO_0kDFCcExoBoN0QQrxvFMQ&oe=67456D79" />
                    </div>
                </div>
            </section>


        </div>
    )
}