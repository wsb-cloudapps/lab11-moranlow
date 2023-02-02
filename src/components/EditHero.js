import React from "react";

const EditHero = (props) => {
	if (props.selectedHero) {
		return (
			<div>
				<div className="editfields">
					<div>
						{props.addingHero ? (
							<input
								type="number"
								name="id"
								placeholder="id"
								value={props.selectedHero.id}
								onChange={props.onChange}
							/>
						) : (
							<label className="value">{props.selectedHero.id}</label>
						)}
					</div>
					<div>
						<input
							name="name"
							value={props.selectedHero.name}
							placeholder="name"
							onChange={props.onChange}
						/>
					</div>
					<div>
						<input
							name="saying"
							value={props.selectedHero.saying}
							placeholder="skills"
							onChange={props.onChange}
						/>
					</div>
				</div>
				<button
					className="edit-btns"
					onClick={props.onCancel}
				>
					Cancel
				</button>
				<button
					className="edit-btns"
					onClick={props.onSave}
				>
					Save
				</button>
			</div>
		);
	} else {
		return <div />;
	}
};

export default EditHero;
