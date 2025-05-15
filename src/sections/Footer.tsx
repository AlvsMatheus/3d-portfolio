import { socialImgs } from "../constants"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container w-full md:flex-row flex-col justify-center items-center md:justify-between md:items-start">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3">
                <a href="/">
                Visit my blog
                </a>
                <div className="socials md:px-20">
                    {socialImgs.map((img) => (
                        <a 
                        className="icon"
                        target="_blank"
                        href={img.url}
                        key={img.url}
                         >
                        <img src={img.imgPath} alt="" />
                        </a>
                    ))}

                </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-center md:text-end">
                         © {new Date().getFullYear()} Matheus | Alves. All rights reserved.
                        </p>

                    </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
