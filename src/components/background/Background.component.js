import React from "react";
import * as Styled from "./Background.styles";
import Icon from "../Icon";

const Background = () => {
	return (
		<div
			style={{
				minHeight: "100vh",
				position: "absolute",
				background: "rgba(0,0,0,0)",
				zIndex: "10001",
				overflowY: "scroll",
				width: "100%",
			}}
		>
			<Styled.Name>Rhys Maughan /</Styled.Name>
			<Styled.Bio>edge</Styled.Bio>
			<Styled.Bio style={{ marginBottom: "0", fontSize: "26px" }}>
				./full_stack
			</Styled.Bio>
			<Styled.SubBio>react</Styled.SubBio>
			<Styled.SubBio>node</Styled.SubBio>
			<Styled.SubBio>.js</Styled.SubBio>
			<Styled.SubBio style={{ marginBottom: "20px" }}>.ts</Styled.SubBio>
			<Styled.Footer>
				<Styled.IconsWrapper>
					<Styled.IconWrapper
						onClick={() => window.open("https://github.com/RMaughan93")}
					>
						<Icon name="github" iconColor="white" />
					</Styled.IconWrapper>
					<Styled.IconWrapper
						onClick={() =>
							window.open("https://www.linkedin.com/in/rhys-maughan-7b2572b3/")
						}
					>
						<Icon name="linkedin" iconColor="white" />
					</Styled.IconWrapper>
				</Styled.IconsWrapper>
			</Styled.Footer>
		</div>
	);
};

export default Background;
