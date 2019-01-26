import withWidth from "@material-ui/core/withWidth";
import * as React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Contact, FAQ, Features, Home, Projects } from "./index";

export interface HomepageProps {}

class Homepage extends React.Component<HomepageProps & { width: any }, any> {
  private contactRef: React.RefObject<HTMLInputElement>;
  constructor(props: any) {
    super(props);
    this.contactRef = React.createRef();
  }
  public render() {
    return (
      <div>
        <Header contactSectionRef={this.contactRef} />
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
