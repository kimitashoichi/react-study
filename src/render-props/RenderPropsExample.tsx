import  React from "react";

interface State {
  x: number;
  y: number;
}

class ExampleRenderProps extends React.Component<any> {
  constructor(props: any) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = {
      x: 0,
      y: 0
    };
  }

  handleMouseMove(event: any) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render () {
    return (
    <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
      {this.props.render(this.state)}
    </div>
    )
  }
}

class MouseTracker extends React.Component {
  render () {
    return (
      <>
        <h1>Move the mouse around!</h1>
        <ExampleRenderProps
         render={(mouse: any )=> (
           <Child mouse={mouse} />
         )}
        />
      </>
    )
  }
}

class Child extends React.Component<any> {
  render () {
    const mouse = this.props;
    // MouseTrackerコンポーネントでExampleRenderPropsコンポーネントのStateをpropsとして受け取っている
    // 親コンポーネント内の記載から孫コンポーネントに直接propsを渡すことができる
    console.log(mouse);
    return (
      <p style={{ position: 'absolute', left: mouse.x, top: mouse.y }}>cat</p>
    )
  }
}

export default MouseTracker;