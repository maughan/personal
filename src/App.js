import React from "react";
import "./App.css";
import Background from "./components/background/Background.component";
import * as Styled from "./components/background/Background.styles";

function App() {
	return (
		<div className="App" style={{ maxWidth: "100vw", minHeight: "100vh" }}>
			<Background />
			<div style={{ position: "fixed" }}>
				<Styled.BackgroundVideo
					id="background-video"
					loop
					autoPlay
					muted
					onContextMenu="return false;"
					playsInline
				>
					<source
						src="https://personalbackgroundvideo.s3.eu-west-2.amazonaws.com/bg.mp4"
						type="video/mp4"
					/>
				</Styled.BackgroundVideo>
			</div>
		</div>
	);
}

export default App;
