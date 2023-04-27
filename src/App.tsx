import { useState } from 'react'
import './App.css'

type TypographProps = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
}

type ParagraphProps = {
  color: string;
}

type TitleProps = {
  fontWeight: "300" | "500" | "700";
}


const Title = ({ children, size, fontWeight }: TypographProps & TitleProps) => {
  return <div>
    <h1
      style={
        {
          fontSize: size === "small" ? "1.5rem" : "3rem",
          fontWeight: fontWeight
        }
      }
    >{children}</h1>
  </div>
}

const Paragraph = ({ children, size, color }: TypographProps & ParagraphProps) => {
  return <div>
    <h1
      style={
        {
          fontSize: size === "small" ? "1rem" : "1.5rem",
          color: color
        }
      }
    >{children}</h1>
  </div>
}

const user = {
  id: 1,
  name: "Maria souza",
  age: 24,
  isAdmin: false,
  aniversario: new Date("2003-01-02")
}

type UserAttributes = typeof user;

const jean: UserAttributes = {
  id: 2,
  name: "Jean souza",
  age: 28,
  isAdmin: false,
  aniversario: new Date("2005-01-02")
}

function App() {
  const [count, setCount] = useState<string | null>(null)

  return <div>
    <Title fontWeight='700'>
      Isso aqui é meu titulo
    </Title>

    <Paragraph color='red' size='small'>
      Isso é um paragrafo
    </Paragraph>
  </div>

}

export default App