export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <h1 className="text-3xl font-bold underline">MT iBrow & Beauty
                    <img src="/img/mt_ibrow_beauty_logo.png" alt="MT iBrow Beauty"/>
                </h1>
                <address>
                    1900 Waterdam Plaza Dr,
                    Building #3
                    Canonsburg PA 15317
                </address>
                <p><a href="tel:724-557-2335">(724) 557 2335</a></p>
            </div>
        </main>
    )
  }