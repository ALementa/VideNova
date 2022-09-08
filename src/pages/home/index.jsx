import React from "react"
import Layout from "../../layout"
import Button from "../../components/primitives/button/index"
import Star from "../../components/primitives/icons/svg/star.svg"
import CardUser from "../../components/primitives/userCard/userCard"
import PhotoUser from "../../assets/avatars/Anna_May.png"

function HomePage() {
  return (
    <Layout>
      <div className="titleHome">
        <div className="heading1">
          Welcome To
          <span className="textRed"> VideoNova</span>
        </div>
        <div className="textInfo">
          <div className="heading4">
            Create videos with a single click. Add subtitles, transcribe audio
            more.
          </div>
        </div>
        <div className="contButtonHome">
          <Button variant="main" label="Start Now" />
        </div>
        <div className="containerInfoUsers">
          <div className="containerLeft">
            <div className="heading2">Best Creators </div>
            <img src={Star} alt="Star" />
          </div>
          <div className="containerRight" />
        </div>
        <div className="containerUsersCards">
          <div className="containerUserCardsItem">
            <CardUser
              nameuser="My Name"
              image={PhotoUser}
              videos={10}
              likes={512}
            />
          </div>
          <div className="containerUserCardsItem">
            <img src="https://placehold.jp/308x389.png" alt="PH" />
          </div>
          <div className="containerUserCardsItem">
            <img src="https://placehold.jp/308x389.png" alt="PH" />
          </div>
          <div className="containerUserCardsItem">
            <img src="https://placehold.jp/308x389.png" alt="PH" />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default HomePage
