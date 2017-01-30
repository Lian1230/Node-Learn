import React from 'react';
import jQuery from 'jquery';
import { redirectURL } from '../lib/utils';
import { getTopicDetail, updateTopic } from '../lib/client';
// import MarkdownEditor from './MarkdownEditor';


export default class EditTopic extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    getTopicDetail(this.props.params.id)
      .then(topic => this.setState({ topic }))
      .catch(err => console.error(err));
  }

  handleChange(name, e) {
    // this.state[name] = e.target.value;
    this.setState({[name]: e.target.value});
  }

  handleSubmit(e) {
    const $btn = jQuery(e.target);
    $btn.button('loading');
    updateTopic(this.state.topic._id, this.state.title, this.state.tags, this.state.content)
      .then(ret => {
        $btn.button('reset');
        redirectURL(`/topic/${ret._id}`);
      })
      .catch(err => {
        $btn.button('reset');
        alert(err);
      });
  }

  render() {
    const topic = this.state.topic;
    if (!this.state.topic) {
      return (
        <h3>正在加载...</h3>
      );
    }

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">编辑主题</div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label htmlFor="ipt-title">标题</label>
              <input type="text" className="form-control" id="ipt-title" defaultValue={topic.title} onChange={this.handleChange.bind(this, 'title')} placeholder="" />
            </div>
            <div className="form-group">
              <label htmlFor="ipt-tags">标签</label>
              <input type="text" className="form-control" id="password" defaultValue={topic.tags} onChange={this.handleChange.bind(this, 'tags')} placeholder="" />
              <p className="help-block">多个标签使用,分割</p>
            </div>
            <div className="form-group">
              <label htmlFor="ipt-content">内容</label>
              <textarea className="form-control" rows="20" id="password" defaultValue={topic.content} onChange={this.handleChange.bind(this, 'content')} placeholder=""></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>保存</button>
          </form>
        </div>
      </div>
    )
  }
}
