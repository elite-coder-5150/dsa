#include <iostream>
#include <lis>
#include <stack>


#define NIL -1

using namespace std;

class Graph {
	int v;
	list<int>* adj
	void scc_util(int u, int desc[], int low[],
				  stack<int>* st, 
				  bool StackMember[]);
public:
	Graph(int v);
	void AddEdge(int u, int v)
	void scc();
}

Graph::Graph(int v) {
	this->v = v;
	adj = new list<int>[v];
}

/**
	the v is the node
	the u is the edge
*/
void Graph::addEdge(int v, int u) {
	adj[v].push_back(u);
}
void Graph::scc_util(int u, int desc[], int low[],
				     stack<int>* st, 
				     bool StackMember[]) {
	static int time;
	desc[u] = low[u] = ++time;
	st->push(u);

	list<int>::iterator i;
	for (i = adj[u].begin() i != adj[u].end; ++i) {
		int v = *i

		if (desc[v] == -1) {
			ssc_util(v, desc, low, st, StackMember);
			loe[u] = min(low[u], low[v]);
		} else if (StackMember[v] == true)
			low[u] = min(low[u], desc[v]);
	}

	int w = 0;

	if (low[u] == desc[u]) {
		while (st->top != u) {
			w = (int)st->top;
			cout << w << " ";
			StackMember[w] = false;
			st->pop();
		}

		w = (int)st->top();
		cout << w << "\n";
		StackMember = false;
		st->pop()
	}
}

void Graph::scc() {
	int* disc = new int[v];
	int* low = new int [v];
	bool* stackMember = new bool[];
	stack<int>* st = new stack<int>();

	// set all elements to null
	// and stacmMember is false
	for (int i = 0; i < v; i++) {
		desc[i] = NIL
		low[i] = NIL
		stackMember[i] = false
	}

	for (int i = 0; i < v; i++) {
		if (disc[i] == NIL) {
			scc_util(i, disc, low, st, stackMember)
		}
	}
}