import styled from "styled-components";

export const BackgroundVideo = styled.video`
	@media (max-aspect-ratio: 16/9) {
		top: 0;
		left: 0;
		position: absolute;
		height: 100vh;
	}

	@media (min-aspect-ratio: 16/9) {
		width: 100vw;
	}
`;

export const Name = styled.p`
	padding-left: 10px;
	font-family: Montserrat;
	font-weight: 400;
	color: white;
	text-align: left;
	max-width: 60%;
	font-size: 80px;
	user-select: none;

	@media screen and (max-width: 750px) {
		width: 60%;
	}

	@media screen and (max-width: 400px) {
		font-size: 50px;
	}
`;

export const Bio = styled.p`
	padding-right: 10px;
	font-family: Montserrat;
	font-weight: 400;
	color: white;
	text-align: right;
	right: 0;
	font-size: 30px;
	user-select: none;
`;

export const SubBio = styled.p`
	margin: 0;
	padding-right: 10px;
	font-family: Montserrat;
	font-weight: 400;
	color: white;
	text-align: right;
	right: 0;
	font-size: 24px;
	user-select: none;
`;

export const IconWrapper = styled.span`
	font-size: 30px;
	&:hover {
		cursor: pointer;
	}
`;

export const IconsWrapper = styled.div`
	width: 60px;
	display: flex;
	justify-content: space-between;
	padding-right: 10px;
	padding-bottom: 10px;

	@media screen and (max-height: 750px) {
		padding-left: 10px;
		padding-right: 0;
	}
`;

export const Footer = styled.div`
	width: 100%;
	background: rgba(0, 0, 0, 0);
	bottom: 0;
	position: absolute;
	display: flex;
	justify-content: flex-end;

	@media screen and (max-height: 750px) {
		justify-content: flex-start;
	}
`;
