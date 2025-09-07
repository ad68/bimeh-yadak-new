import dynamic from 'next/dynamic';

// Dynamically import to avoid SSR errors
const Camera = dynamic(() => import('./components/Camera'), { ssr: false });

export default function Page() {
    return (
        <main>

            <section className='w-full h-[400px] flex justify-center items-center mt-[100px]'>
                <h1>Camera Demo</h1>
                <Camera />
            </section>

        </main>
    );
}
