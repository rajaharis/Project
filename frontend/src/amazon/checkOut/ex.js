
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Checkout, { PaymentMethod } from '../checkOut/checkOut';
import Header from '../header';
import Stepper from './stepper';

class Example extends Component {
	constructor() {

		super();
		this.state = {
			steps: [{
			}, {

				title: 'Step Two',
				href: 'http://example2.com',
				onClick: (e) => {
					e.preventDefault()
					console.log('onClick', 2)
				}
			}],
			currentStep: 0,
		};
		this.onClickNext = this.onClickNext.bind(this);
		this.onClickBack = this.onClickBack.bind(this);
	}

	onClickNext() {
		const { steps, currentStep } = this.state;
		this.setState({

			currentStep: currentStep + 1,
		});


	}
	onClickBack() {
		const { steps, currentStep } = this.state;
		this.setState({
			currentStep: currentStep - 1,
		});


	}


	render() {
		const { steps, currentStep } = this.state;
		const buttonStyle = { background: '#E0E0E0', width: 200, padding: 16, textAlign: 'center', margin: '0 auto', marginTop: 32 };

		return (
			<div>
				<Stepper steps={steps} activeStep={currentStep} />

				{
					currentStep == 0 ? <Checkout /> : <PaymentMethod />
				}

				{
					currentStep == 0 ? <Button style={{ float: "right" }} onClick={this.onClickNext}>Next</Button>
						: <Button onClick={this.onClickBack}>back</Button>
				}

			</div>


		);
	}
};
export default Example;