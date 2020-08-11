import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import ArrowRight from "baseui/icon/arrow-right";
import ArrowLeft from "baseui/icon/arrow-left";
import Slider from "react-slick";
import {
	Button,
	SIZE as BUTTON_SIZE,
	SHAPE as BUTTON_SHAPE,
	KIND as BUTTON_KIND
} from "baseui/button";

import PhoneMockup from "@/frontend/components/PhoneMockup";

const demoSlides = [
	{
		name: "Willis",
		src: "/static/assets/demo/willis.jpg"
	},
	{
		name: "Brendan",
		src: "/static/assets/demo/brendan.jpg"
	},
	{
		name: "Jenny",
		src: "/static/assets/demo/jenny.jpg"
	},
	{
		name: "Christie",
		src: "/static/assets/demo/christie.jpg"
	},
	{
		name: "Samantha",
		src: "/static/assets/demo/samantha.jpg"
	}
];

const sliderSettings = {
	infinite: true,
	speed: 250,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	arrow: false
};

const CallPageSlider = ({ tilt }) => {
	const [css, theme] = useStyletron();
	const slider = React.createRef();

	return (
		<div
			className={css({
				display: "flex",
				justifyContent: "flex-end",
				position: "relative",
				overflow: "hidden",
				[theme.mediaQuery.maxMedium]: {
					marginRight: "-40px"
				},
				[theme.mediaQuery.maxSmall]: {
					marginRight: "0px",
					justifyContent: "center"
				}
			})}
		>
			<div
				className={css({
					display: "flex",
					alignItems: "center",
					marginRight: "10px"
				})}
			>
				<Button
					size={BUTTON_SIZE.mini}
					shape={BUTTON_SHAPE.round}
					kind={BUTTON_KIND.secondary}
					onClick={() => slider.current.slickPrev()}
				>
					<ArrowLeft size={22} />
				</Button>
			</div>
			<div
				className={css({
					transform: tilt
						? "rotate(3deg) scale(0.9) translate3d(0, 0, 0)"
						: "translate3d(0, 0, 0)"
				})}
			>
				<PhoneMockup>
					<Slider {...sliderSettings} ref={slider}>
						{demoSlides.map((slide) => (
							<div key={slide.name}>
								<img
									src={slide.src}
									alt={`Callsesh phone demonstration for ${slide.name}`}
								/>
							</div>
						))}
					</Slider>
				</PhoneMockup>
			</div>
			<div
				className={css({
					display: "flex",
					alignItems: "center",
					marginLeft: "10px"
				})}
			>
				<Button
					size={BUTTON_SIZE.mini}
					shape={BUTTON_SHAPE.round}
					kind={BUTTON_KIND.secondary}
					onClick={() => slider.current.slickNext()}
				>
					<ArrowRight size={22} />
				</Button>
			</div>
		</div>
	);
};

CallPageSlider.propTypes = {
	tilt: PropTypes.bool
};
CallPageSlider.defaultProps = {
	tilt: true
};

export default CallPageSlider;
