
export default function Page() {
    return (
        <>
            <header className="flex items-center justify-between p-5">
               
                <h1 className="text-3xl font-bold underline display-none"><span>MT iBrow & Beauty</span>
                    <img height={`200px`} src="/img/mt_ibrow_beauty_logo.png" alt="MT iBrow Beauty"/>
                </h1>
                
            </header>

            <main className="container">
                <div className="row"><MTContent /> </div>

                <div className="row flex items-center justify-between">
                    <a className="facebook m-5" href="https://www.facebook.com/profile.php?id=61562972956850">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                    </a>
                    <a className="instagram m-5" href="https://www.instagram.com/mt____browbeauty/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"/></svg>
                    </a>
                </div>
                    <h2 className="gradient-1">BROW SERVICES</h2>
                    <p className="typography-hero-features"><strong>WE OFFER PERMANENT BROW SERVICES SUCH AS OMBRE POWDER, MICROBLADING, & MICROSHADING ( COMBINATION )</strong></p>

                    <div className="row">
                        <Item title={`OMBRÉ POWDER`} price={`500`} imgSrc={`/img/MT_ibrow_beauty_TOUCH_UP.jpg`}>
                            <p><strong>(TOUCH UP  AFTER 5 WEEK $150 & last ALMOST 2 YEARS)</strong></p>
                            <p> OMBRE POWDER IS SHADING THAT IS DARKER AT THE TAILS AND LIGHTER AT THE FRONT. THE FINAL HEALED RESULTS IS POWDERED FILLED BROWS SIMILAR TO THE LOOK OF MAKEUP. OUR SIGNATURE SOFT, MISTY FRONTS CREATE A NATURAL AND SUBTLE LOOK. THIS METHOD SUITS EVERYONE INCLUDING ALL SKIN TYPES.</p>
                        </Item>

                        <Item title={`MICROSHADING`} price={`550`} imgSrc={`/img/MT_ibrow_beauty_MICROSHADING.jpeg`}>
                            <p>MICROSHADING IS A OMBRE POWDER SHADING WITH ADDED HAIR STROKES IN THE FRONT. THIS METHOD GIVES A DEFINED MAKEUP LOOK WITH THE SHADED BROW WITH AN ADDED FLUFFY AND DENSE EFFECT. THIS METHOD IS BEST SUITED FOR THOSE WITH NORMAL TO DRY SKIN TYPE AND THOSE WITH FLUFFY AND FULL BROW HAIRS. </p>
                        </Item>

                        <Item title={`MICROBLADING `} price={`550`} imgSrc={`/img/IMG_1057.jpeg`}>
                            <p><strong>  ( COMBINATION): $550 ( TOUCH UP AFTER 5 WEEK $150 & LAST ALMOST 2 YEARS)</strong></p>
                            <p>Microblading uses a blade-shaped tool with a row of tiny, barely visible needles to create hair-like strokes along your brows while depositing pigment into your skin.</p>
                        </Item>
                    </div>

            </main>

            <footer>
                <Address />
                <Policy />
            </footer>
        </>
    )
  }

function MTContent(){
    return (
        <div className="col-md-12">
            <div className="row g-0  overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col px-5 pb-5 d-flex flex-column position-static">
                    <h2 className="mb-0 gradient-1">Welcome to MT IBROW & BEAUTY.</h2>
                    <p className="card-text mb-auto typography-hero-features">I’m MT NGUYEN, a passionate brow artist dedicated to perfecting your look through expert eyebrow design. With years of experience and specialized training in brow shaping, tinting, and microblading, I offer personalized services to help you achieve beautifully defined brows that complement your unique style. At MT IBROW & BEAUTY , we believe that every brow has a story, and we’re here to craft yours with precision and care. Explore my services and book a consultation today to start your journey to flawless brows!"</p>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img height="600px"   src="/img/MT.jpeg" alt="MT Nguyen" />
                </div>
            </div>
        </div>
    )
}

function Item({children, title, price, imgSrc}){
    return(
        <div className="item-card row g-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-5 d-flex flex-column position-static">
                <h3 className="mb-0">{title} ${price}</h3>
                <div> {children}</div>
            </div>
            <div className="col-auto d-none d-lg-block">
            <img height="600px" src={imgSrc} />
            </div>
        </div>
    )
}

function Address(){
    return (
        <section className="address-section z-10 w-full max-w-5xl items-center justify-between font-mono lg:flex">
            <address>
                1900 Waterdam Plaza Dr, <br />
                Building #3<br />
                Canonsburg PA 15317
            </address>
            <h3><a href="tel:724-557-2335">(724) 557 2335</a></h3>
        </section>
    )
}
function Policy(){
    return(
        <div className="pb-5">
            <h3>Police </h3>
            <h4>*TOUCH UPS*</h4>
            <p>1st touch ups are always required to complete your new look. 1st touch ups that are over 1 year of initial new service are at the rate of a new service for all artists. We also recommend annual touch ups to maintain your brows as they tend to fade over time. Annual touch ups are also subjected to different rates depending on when you last visited. Touch up prices are not included in the new service/corrections/cover-up prices. Touch ups are an additional charge per service and the rates are dependent on each artist and the time it has been since your last visit . Additionally, we reserve the right in adjust prices as needed without prior notice. </p>

            <h4>*DEPOSITS*</h4>
            When booking your appointment, you will be asked to place a deposit for your service. This deposit will be applied to your total fee that is due the same day of your appointment. Deposits are non-refundable and non-transferable. Non-refundable means, once you place the deposit, any cancelations for any reason will not be refundable. 

            <h4>*LATE POLICY*</h4>
            Appointments will be canceled and no refunds will be given if the client is more than 15 minutes late to their appointment. Artists take multiple clients a day and need the full amount of time for each appointment. You may schedule a new appointment, but will need to place another deposit.

            <h4>*RESCHEDULING* </h4>
            Rescheduling appointments will only be possible if the artist is given at least one week notice prior to your scheduled appointment. Due to limited appointment availability, we may not be able to reschedule your appointment until a much later date. Promotional rates may change if you reschedule your appointment to a later date. If you are rescheduling your touch up the rates will change depending on what time frame you schedule your new appointment (use price lists as reference). If you are rescheduling within one week of your appointment date you will not be able to transfer your deposit to a later date and deposits will be forfeited. A new deposit will need to be made when rescheduling a future appointment if it is within a week of your scheduled appointment. 

            <h4>*CANCELLATION & NO SHOW*</h4>
            Any appointments canceled within one week of the appointment date will not be able to transfer deposit to a later date and deposits will be forfeited. Same-day cancellations or no-shows will be charged for the price of the full service.

            <h4>IF YOU HAVE ANY QUESTIONS CONCERNING MEDICAL CONDITIONS PLEASE CONSULT YOUR DOCTOR BEFORE SCHEDULING YOUR APPOINTMENT </h4>

            <h4>DO NOT BOOK AN APPOINTMENT IF: </h4>
            You are under the age of 18 
            You are pregnant or nursing 
            You are taking blood thinning medications 
            You have viral infections or diseases
            <h4>*BEFORE YOUR APPOINTMENT*</h4>
            No coffee or other stimulants 
            No alcohol or other blood thinners 
            No retinol skincare products 
        </div>
    )
}