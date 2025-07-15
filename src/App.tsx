import Spinner from "./assets/icons/spinner.svg?react";
import TrashIcon from "./assets/icons/trash.svg?react";
import Badge from "./components/badge";
import Icon from "./components/icon";
import Text from "./components/text";

export default function App() {
	return (
		<div className="grid gap-3">
			<div className="flex flex-col gap-1">
				<Text as="a" variant="body-sm-bold" className="text-pink-dark">
					BEM VINDO
				</Text>
				<Text as="a">BEM VINDO</Text>
				<Text as="a" variant="body-md-bold" className="text-green-dark">
					BEM VINDO
				</Text>
			</div>

			<div className="flex gap-1">
				<Icon svg={TrashIcon} className="fill-pink-base" />
        <Icon svg={Spinner} className="fill-pink-base" animate />
			</div>

      <div>
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
      </div>
		</div>
	);
}
