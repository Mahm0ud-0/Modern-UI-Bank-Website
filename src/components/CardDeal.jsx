import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

const CardDeal = () => {
  return (
    <section className={layout.section}>
      {/* text */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eveniet animi,
          alias aspernatur odit consectetur reprehenderit
          voluptatum placeat mollitia aperiam corporis?
        </p>

        <Button styles="mt-10" />
      </div>

      {/* image */}
      <div className={`${layout.sectionImg} md:ml-[40px]`}>
        <img src={card} alt="card" className="w-[100%] h-[100%]"/>
      </div>
      
    </section>
  )
}

export default CardDeal