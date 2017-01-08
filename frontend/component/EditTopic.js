import React from 'react';
import jQuery from 'jquery';
import { redirectURL } from '../lib/utils';
import { getTopicDetail, updateTopic } from '../lib/client';

export default class EditTopic extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    getTopicDetail(this.props.params.id)
      .then(topic => {
        this.setState({ topic });
      })
      .catch(err => console.error(err));
  }

  handlechange(name, e) {
    this.state.topic[name] = e.target.value;
    console.log(a);
  }

  handleSubmit(e) {
    const $btn = jQuery(e.target);
    $btn.button('loading');
    updateTopic(this.state.topic._id, this.state.topic.title, this.state.topic.tags, this.state.topic.content)
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
              <label htmlFor="ipt-name">标题</label>
              <input type="text" className="form-control" id="ipt-name" value={topic.title} onChange={this.handlechange.bind(this, 'title')} placeholder="" />
            </div>
            <div className="form-group">
              <label htmlFor="ipt-tags">标签</label>
              <input type="text" className="form-control" id="password" value={topic.tags} onChange={this.handlechange.bind(this, 'tags')} placeholder="" />
              <p className="help-block">多个标签使用,分割</p>
            </div>
            <div className="form-group">
              <label htmlFor="ipt-content">内容</label>
              <textarea className="form-control" rows="20" id="password" value={topic.content} onChange={this.handlechange.bind(this, 'content')} placeholder=""></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>保存</button>
          </form>
        </div>
      </div>
    )
  }
}