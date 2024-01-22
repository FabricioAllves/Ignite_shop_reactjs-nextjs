import { styled } from "@/styles";

const Button = styled('button', {
  backgroundColor: '$green500',
  borderRadius: 8,
  height: 50,
  width: 200 
})

export default function Home() {
  return (
   <Button>Enviar</Button>
  );
}
