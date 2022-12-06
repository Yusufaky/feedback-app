import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>This is About Page</h1>
        <p>
          <Link to="/">Back</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
