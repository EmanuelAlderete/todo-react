import PencilIcon from "../assets/icons/pencil.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import ButtonIcon from "../components/buttonIcon";
import Card from "../components/card";
import InputCheckbox from "../components/inputCheckbox";
import Text from "../components/text";

export default function TaskItem() {
  return (
    <Card size="md" className="flex items-center gap-4">
      <InputCheckbox />
      <Text className="flex-1">Fazer compras da semana</Text>
      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
        <ButtonIcon icon={PencilIcon} variant="tertiary" />
      </div>
    </Card>
  );
}
