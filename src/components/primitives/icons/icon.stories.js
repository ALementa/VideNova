/* eslint-disable */
// Icon.stories.js|jsx
//Потім озібратися з іконками!!!!
import React from "react"
import Icon from "./icon"
import CustomIcons from "./custom-icons"

export default {
  title: "COMPONENTS/Icon",
  component: Icon,
  argTypes: {
    name: {
      options: [
        "Discord",
        "Telegram",
        "Twitter",
        "Vnova",
      ],
      control: { type: "select" },
    },
  },
}

export function CustomIcon(args) {
  return <Icon {...args} />
}
CustomIcon.args = {
  name: "Telegram",
  size: "100",
  color: "#4A4847",
}

export function ReactIcon(args) {
  return <Icon {...args} />
}
ReactIcon.args = {
  name: "Discord",
  size: "100",
  color: "#4A4847",
}

export function Documentation() {
  function showCustomIcons() {
    const iconRows = []
    for (const el in CustomIcons) {
      const ExapmleIcon = CustomIcons[el]
      iconRows.push(
        <div
          style={{
            flex: "1 0 32%",
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div style={{ margin: "0 20px" }}>
            <ExapmleIcon width="30px" height="30px" />
          </div>
          <div>
            <code style={{ color: "#666" }}>{`<Icon name='${el}'/>`}</code>
          </div>
        </div>
      )
    }
    return iconRows
  }
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1>Як працює компонент Icon</h1>
      <h2>Кастомні іконки</h2>
      <p>
        Викликаються через праметр <code>name</code> за назвою з префіксом{" "}
        <code>Custom...</code>.
      </p>
      <p>
        Додатково можна налаштувати за допомогю параметрів <code>size</code> та{" "}
        <code>color</code>
      </p>
      <p>Перелік доступних кастомних іконок:</p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {showCustomIcons()}
      </div>
      <h2>React-icons</h2>
      <p>
        Всі інші іконки використовуємо з{" "}
        <a
          href="https://react-icons.github.io/react-icons/"
          target="_blank"
          rel="noreferrer"
        >
          бібліотеки react-icons
        </a>
        . Для цього у парметр <code>name</code> потрібно передати ключ іконки.
        Додатково можна налаштувати за допомогю параметрів <code>size</code> та{" "}
        <code>color</code>
      </p>

      <div
        style={{
          flex: "1 0 32%",
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div style={{ margin: "0 20px" }}>
          <Icon name="Discord" size="40px" color="f92" />
        </div>
        <div>
          <code style={{ color: "#666" }}>
            {`<Icon name='Vnova' size='40px' color='f92'/>`}
          </code>
        </div>
      </div>
    </div>
  )
}

export function InvalidIcon(args) {
  return <Icon {...args} />
}
InvalidIcon.args = {
  name: "qwertyasdf",
}
