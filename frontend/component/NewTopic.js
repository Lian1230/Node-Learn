import React from 'react';
import jQuery from 'jquery';
import { addTopic } from '../lib/client';
import {redirectURL} from '../lib/utils';
// import TopicEditor from './TopicEditor';

export default class NewTopic extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit(e){
    const $btn = jQuery(e.target);
    $btn.button('loading');
    addTopic(this.state.title, this.state.tags, this.state.content)
      .then(ret => {
        $btn.button('reset');
        redirectURL(`/topic/${ret._id}`);
      })
      .catch(err => {
        $btn.button('reset');
        alert(err);
      });
  }
  // componentDidMount(){

  // }

  handlechange(name, e) {
    this.state[name] = e.target.value;
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">发表新主题</div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label htmlFor="ipt-name">标题</label>
              <input type="text" className="form-control" id="ipt-name" onChange={this.handlechange.bind(this, 'title')} placeholder="" />
            </div>
            <div className="form-group">
              <label htmlFor="ipt-tags">标签</label>
              <input type="text" className="form-control" id="password" onChange={this.handlechange.bind(this, 'tags')} placeholder="" />
              <p className="help-block">多个标签使用,分割</p>
            </div>
            <div className="form-group">
              <label htmlFor="ipt-content">内容</label>
              <textarea className="form-control" rows="20" id="password" onChange={this.handlechange.bind(this, 'content')} placeholder=""></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>保存</button>
          </form>
        </div>
      </div>
    )
  }

  // render() {
  //   return (
  //     <TopicEditor
  //       title="发表新主题"
  //       topic={null}
  //       onSave={(topic, done) => {
  //         addTopic(topic.title, topic.tags, topic.content)
  //           .then(ret => {
  //             done();
  //             // redirectURL(`/topic/${ret._id}`);
  //           })
  //           .catch(err => {
  //             done();
  //             alert(err);
  //           });
  //       }}
  //     />
  //   )
  // }
}