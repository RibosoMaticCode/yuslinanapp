import Image from "next/image";

export default function SectionTwo() {
    return (
        <section id="two" className="wrapper alt style2">
        <section className="spotlight">
            <div className="image"><Image src="/images/pic01.jpg" width={200} height={200} alt="" /></div><div className="content">
                <h2>Magna primis lobortis<br />
                sed ullamcorper</h2>
                <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
            </div>
        </section>
        <section className="spotlight">
            <div className="image"><Image src="/images/pic02.jpg" width={200} height={200} alt="" /></div><div className="content">
                <h2>Tortor dolore feugiat<br />
                elementum magna</h2>
                <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
            </div>
        </section>
        <section className="spotlight">
            <div className="image"><Image src="/images/pic03.jpg" width={200} height={200} alt="" /></div><div className="content">
                <h2>Augue eleifend aliquet<br />
                sed condimentum</h2>
                <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
            </div>
        </section>
    </section>
    );
  }
  