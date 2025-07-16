import PlusIcon from "./assets/icons/plus.svg?react";
import Spinner from "./assets/icons/spinner.svg?react";
import TrashIcon from "./assets/icons/trash.svg?react";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/buttonIcon";
import Card from "./components/card";
import Icon from "./components/icon";
import InputCheckbox from "./components/inputCheckbox";
import InputText from "./components/inputText";
import Text from "./components/text/text";

export default function App() {
  return (
    <div className="grid gap-10">
      <div className="flex flex-col gap-1">
        <Text as="a" variant="body-sm-bold" className="text-pink-dark">
          BEM VINDO
        </Text>
        <Text as="a">BEM VINDO</Text>
        <Text as="a" variant="body-md-bold" className="text-green-dark">
          BEM VINDO
        </Text>
      </div>

      <div className="flex gap-10">
        <Icon svg={TrashIcon} className="fill-pink-base" />
        <Icon svg={Spinner} className="fill-pink-base" animate />
      </div>

      <div>
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Be welcome</Button>
      </div>

      <div className="flex gap-10">
        <ButtonIcon icon={TrashIcon} variant={"secondary"} />
        <ButtonIcon icon={TrashIcon} variant={"primary"} />
      </div>

      <div className="gap-10">
        <InputText />
      </div>

      <div className="gap-10">
        <InputCheckbox />
      </div>

      <div className="gap-10">
        <Card size="md">Olá mundo</Card>
      </div>
    </div>
  );
}
