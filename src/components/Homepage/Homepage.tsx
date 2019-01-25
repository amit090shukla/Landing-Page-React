import * as React from "react";
import { Home, Features, Projects, Contact, FAQ } from "./index";
import Footer from "../Footer";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import Header from "../Header";

export interface HomepageProps {}

class Homepage extends React.Component<HomepageProps & { width: any }, any> {
  private contactRef: React.RefObject<HTMLInputElement>;
  constructor(props: any) {
    super(props);
    this.contactRef = React.createRef();
  }
  state = {
    active: "home"
  };
  public render() {
    return (
      <div>
        <Header
          active={this.state.active}
          contactSectionRef={this.contactRef}
        />
        <Home contactSectionRef={this.contactRef} />
        <Features />
        <Projects />
        <div ref={this.contactRef}>
          <Contact />
        </div>
        <FAQ />
        <Footer />
      </div>
    );
  }
}

export default withWidth()(Homepage);
